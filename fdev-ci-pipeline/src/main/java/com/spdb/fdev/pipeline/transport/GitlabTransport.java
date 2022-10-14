package com.spdb.fdev.pipeline.transport;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spdb.fdev.base.dict.Dict;
import com.spdb.fdev.base.dict.ErrorConstants;
import com.spdb.fdev.common.exception.FdevException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.Base64Utils;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.net.URI;
import java.util.Map;

@Component
public class GitlabTransport {
    @Autowired
    RestTemplate restTemplate;

//    @Value("${fdev.transport.log.data.enabled:true}")
    private boolean logDataEnabled = true;

    private Logger logger = LoggerFactory.getLogger(GitlabTransport.class);

    private ObjectMapper objectMapper = new ObjectMapper();

    private static final String BEGIN_REQUEST = ">>>>>>>>> begin request:{}";

    private static final String REQUEST_DATA = ">>>>>>>>> request data:{}";

    private static final String RESPONSE_DATA = "<<<<<<<<< response data:{}";
    /**
     * Fdev调用gitlab接口api
     *
     * @param url  调用api url
     * @param send 发送map数据
     * @return
     * @throws Exception
     */
    public Object submitPost(URI url, Map send) throws Exception {
        logger.info(BEGIN_REQUEST, url);
        if (logDataEnabled) {
            logger.info(REQUEST_DATA, objectMapper.writeValueAsString(send));
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", "application/json");
        JSONObject parse = JSONObject.parseObject(JSON.toJSONString(send));
        HttpEntity<Object> request = new HttpEntity<>(parse, httpHeaders);
        try {
            ResponseEntity<String> result = restTemplate.postForEntity(url, request, String.class);
            Object returnData = result.getBody();
            return returnData;
        } catch (HttpClientErrorException e) {
            throw resolveGitlabException(e, url.toString());
        } finally {
            if (logDataEnabled) {
                logger.info(RESPONSE_DATA, objectMapper.writeValueAsString(request));
            }
        }
    }

    /**
     * multipart/form-data 方式的post
     *
     * @param url
     * @param send
     * @return
     * @throws Exception
     */
    public Object submitPostForFromData(URI url, Map send) throws Exception {
        logger.info(BEGIN_REQUEST, url);
        if (logDataEnabled) {
            logger.info(REQUEST_DATA, objectMapper.writeValueAsString(send));
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", "multipart/form-data");
        JSONObject parse = JSONObject.parseObject(JSON.toJSONString(send));
        HttpEntity<Object> request = new HttpEntity<>(parse, httpHeaders);
        try {
            ResponseEntity<String> result = restTemplate.postForEntity(url, request, String.class);
            Object returnData = result.getBody();
            return returnData;
        } catch (HttpClientErrorException e) {
            throw resolveGitlabException(e, url.toString());
        } finally {
            if (logDataEnabled) {
                logger.info(RESPONSE_DATA, objectMapper.writeValueAsString(request));
            }
        }
    }

    public Object submitPut(URI url, String token, Map send, boolean logEnabled) throws Exception {
        this.logDataEnabledStart(url, send, logEnabled);
        ResponseEntity<String> result = null;
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", "application/json");
        httpHeaders.add(Dict.PRIVATE_TOKEN, token);
        HttpEntity<Object> request = new HttpEntity<Object>(objectMapper.writeValueAsString(send), httpHeaders);
        try {
            result = restTemplate.exchange(url, HttpMethod.PUT, request, String.class);
            return result.getBody();
        } catch (HttpClientErrorException e) {
            throw resolveGitlabException(e, url.toString());
        } finally {
            this.logDataEnabledEnd(result);
        }
    }


    public void submitPut(URI url, byte[] send, boolean logEnabled) throws Exception {
        this.logDataEnabledStart(url, send, logEnabled);
//        String sendStr = new String(JSONObject.toJSONString(send).getBytes("ISO-8859-1"),"UTF-8");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON_UTF8);
        HttpEntity<byte[]> request = new HttpEntity<byte[]>(send, httpHeaders);
        restTemplate.put(url, request);
    }


    public Object submitGet(String url, MultiValueMap<String, String> header) throws Exception {
        logger.info(BEGIN_REQUEST, url);
        if (logDataEnabled) {
            logger.info(REQUEST_DATA, objectMapper.writeValueAsString(header));
        }
        ResponseEntity<String> result = null;
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.addAll(header);
        HttpEntity<Object> request = new HttpEntity<>(httpHeaders);
        try {
            result = restTemplate.exchange(new URI(url), HttpMethod.GET, request, String.class);
            Object returnData = result.getBody();
            return returnData;
        } catch (HttpClientErrorException e) {
            throw resolveGitlabException(e, url);
        } finally{
            if (logDataEnabled) {
                logger.info(RESPONSE_DATA, objectMapper.writeValueAsString(result));
            }
        }
    }

    /**
     * 方法执行完成以后的数据打印
     *
     * @param data
     * @throws JsonProcessingException
     */
    public void logDataEnabledEnd(Object data) throws JsonProcessingException {
        if (logDataEnabled) logger.info(">>>>>>>>> request data:{}", objectMapper.writeValueAsString(data));
    }


    /**
     * 开始日常日志打印
     *
     * @param url  url路径
     * @param data 数据信息
     */
    public void logDataEnabledStart(Object url, Object data, boolean logEnabled) throws JsonProcessingException {
        logger.info(">>>>>>>>> begin request:{}", url.toString());
        if (logEnabled) {
            logger.info(">>>>>>>>> request data:{}", objectMapper.writeValueAsString(data));
        }
    }

    private FdevException resolveGitlabException(HttpClientErrorException e, String url) throws Exception {
        if (e.getRawStatusCode() == 401) {
            logger.error("gitlab error>>>Unauthorized:the role error>>>>url:{}", url);
            return new FdevException(ErrorConstants.GITLAB_REQUEST_ERROR,
                    new String[]{"操作无权限：" + e.getRawStatusCode()});
        } else if (e.getRawStatusCode() == 403) {
            logger.error("GitLab error>>>Forbidden:this action is forbidden for this user>>>>url:{}" , url);
            return new FdevException(ErrorConstants.GITLAB_REQUEST_ERROR,
                    new String[]{"操作无权限：" + e.getRawStatusCode()});
        } else if (e.getRawStatusCode() == 404) {
            logger.error("GitLab error>>>Not Found:can't find this resource>>>>url:{}", url);
            return new FdevException(ErrorConstants.GITLAB_REQUEST_ERROR,
                    new String[]{"请求资源不存在：" + e.getRawStatusCode()});
        } else if (e.getRawStatusCode() == 409) {
            logger.error("GitLab error>>>Conflict:this request already exist>>>>url:{}", url);
            return new FdevException(ErrorConstants.GITLAB_REQUEST_ERROR,
                    new String[]{"请求已存在：" + e.getRawStatusCode()});
        } else {
            logger.error("GitLab error>>>Bad Request:wrong request data>>>>url:{}", url);
            return new FdevException(ErrorConstants.GITLAB_REQUEST_ERROR,
                    new String[]{new StringBuilder(e.getRawStatusCode())
                            .append("(")
                            .append(e.getResponseBodyAsString())
                            .append(")").toString()});
        }
    }
}
