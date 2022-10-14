package com.spdb.executor.action;

import com.csii.pe.action.ext.BaseExecutableAction;
import com.csii.pe.core.Context;
import com.csii.pe.spdb.common.dict.Dict;
import com.spdb.fdev.common.exception.FdevException;
import com.spdb.fdev.transport.RestTransport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.Map;

public class UpdateGitlabUserNameAction extends BaseExecutableAction {

    private static Logger logger = LoggerFactory.getLogger(UpdateGitlabUserNameAction.class);

    @Autowired
    private RestTransport restTransport;

    @Override
    public void execute(Context context) {
        logger.info("execute UpdateGitlabUserName begin");
        Map map=new HashMap();
        map.put(Dict.REST_CODE,"refreshGitUser");
        try {
            restTransport.submit(map);
        } catch (Exception e) {
            logger.error("用户模块定时更新GitlabUserName失败",e);
            throw new FdevException("用户模块定时更新GitlabUserName失败");
        }
        logger.info("execute UpdateGitlabUserName end");
    }
}
