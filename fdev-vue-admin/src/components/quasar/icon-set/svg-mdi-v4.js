import {
  mdiCheckCircle,
  mdiAlert,
  mdiInformation,
  mdiExclamation,
  mdiArrowUp,
  mdiArrowRight,
  mdiArrowDown,
  mdiArrowLeft,
  mdiMenuDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiGradient,
  mdiTune,
  mdiPaletteSwatch,
  mdiRefresh,
  mdiChevronUp,
  mdiChevronDown,
  mdiCircle,
  mdiCloseCircle,
  mdiCheck,
  mdiClockOutline,
  mdiCalendarToday,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatStrikethroughVariant,
  mdiFormatUnderline,
  mdiFormatListBulleted,
  mdiFormatListNumbered,
  mdiFormatSubscript,
  mdiFormatSuperscript,
  mdiLink,
  mdiFullscreen,
  mdiFormatQuoteClose,
  mdiFormatAlignLeft,
  mdiFormatAlignCenter,
  mdiFormatAlignRight,
  mdiFormatAlignJustify,
  mdiPrinter,
  mdiFormatIndentDecrease,
  mdiFormatIndentIncrease,
  mdiFormatClear,
  mdiFormatColorText,
  mdiFormatSize,
  mdiMinus,
  mdiUndo,
  mdiRedo,
  mdiFormatHeader1,
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatHeader4,
  mdiFormatHeader5,
  mdiFormatHeader6,
  mdiCodeTags,
  mdiNumeric1Box,
  mdiNumeric2Box,
  mdiNumeric3Box,
  mdiNumeric4Box,
  mdiNumeric5Box,
  mdiNumeric6Box,
  mdiNumeric7Box,
  mdiFormatFont,
  mdiPlus,
  mdiClose,
  mdiAlertCircle,
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiStar,
  mdiPencil,
  mdiPlay,
  mdiPlusBox,
  mdiCloudUpload,
  mdiNotificationClearAll,
  mdiCheckAll
} from '@quasar/extras/mdi-v4';

export default {
  name: 'svg-mdi-v4',
  type: {
    positive: mdiCheckCircle,
    negative: mdiAlert,
    info: mdiInformation,
    warning: mdiExclamation
  },
  arrow: {
    up: mdiArrowUp,
    right: mdiArrowRight,
    down: mdiArrowDown,
    left: mdiArrowLeft,
    dropdown: mdiMenuDown
  },
  chevron: {
    left: mdiChevronLeft,
    right: mdiChevronRight
  },
  colorPicker: {
    spectrum: mdiGradient,
    tune: mdiTune,
    palette: mdiPaletteSwatch
  },
  pullToRefresh: {
    icon: mdiRefresh
  },
  carousel: {
    left: mdiChevronLeft,
    right: mdiChevronRight,
    up: mdiChevronUp,
    down: mdiChevronDown,
    navigationIcon: mdiCircle
  },
  chip: {
    remove: mdiCloseCircle,
    selected: mdiCheck
  },
  datetime: {
    arrowLeft: mdiChevronLeft,
    arrowRight: mdiChevronRight,
    now: mdiClockOutline,
    today: mdiCalendarToday
  },
  editor: {
    bold: mdiFormatBold,
    italic: mdiFormatItalic,
    strikethrough: mdiFormatStrikethroughVariant,
    underline: mdiFormatUnderline,
    unorderedList: mdiFormatListBulleted,
    orderedList: mdiFormatListNumbered,
    subscript: mdiFormatSubscript,
    superscript: mdiFormatSuperscript,
    hyperlink: mdiLink,
    toggleFullscreen: mdiFullscreen,
    quote: mdiFormatQuoteClose,
    left: mdiFormatAlignLeft,
    center: mdiFormatAlignCenter,
    right: mdiFormatAlignRight,
    justify: mdiFormatAlignJustify,
    print: mdiPrinter,
    outdent: mdiFormatIndentDecrease,
    indent: mdiFormatIndentIncrease,
    removeFormat: mdiFormatClear,
    formatting: mdiFormatColorText,
    fontSize: mdiFormatSize,
    align: mdiFormatAlignLeft,
    hr: mdiMinus,
    undo: mdiUndo,
    redo: mdiRedo,
    heading: mdiFormatSize,
    heading1: mdiFormatHeader1,
    heading2: mdiFormatHeader2,
    heading3: mdiFormatHeader3,
    heading4: mdiFormatHeader4,
    heading5: mdiFormatHeader5,
    heading6: mdiFormatHeader6,
    code: mdiCodeTags,
    size: mdiFormatSize,
    size1: mdiNumeric1Box,
    size2: mdiNumeric2Box,
    size3: mdiNumeric3Box,
    size4: mdiNumeric4Box,
    size5: mdiNumeric5Box,
    size6: mdiNumeric6Box,
    size7: mdiNumeric7Box,
    font: mdiFormatFont,
    viewSource: mdiCodeTags
  },
  expansionItem: {
    icon: mdiChevronDown,
    denseIcon: mdiMenuDown
  },
  fab: {
    icon: mdiPlus,
    activeIcon: mdiClose
  },
  field: {
    clear: mdiCloseCircle,
    error: mdiAlertCircle
  },
  pagination: {
    first: mdiChevronDoubleLeft,
    prev: mdiChevronLeft,
    next: mdiChevronRight,
    last: mdiChevronDoubleRight
  },
  rating: {
    icon: mdiStar
  },
  stepper: {
    done: mdiCheck,
    active: mdiPencil,
    error: mdiAlert
  },
  tabs: {
    left: mdiChevronLeft,
    right: mdiChevronRight,
    up: mdiChevronUp,
    down: mdiChevronDown
  },
  table: {
    arrowUp: mdiArrowUp,
    warning: mdiAlert,
    firstPage: mdiChevronDoubleLeft,
    prevPage: mdiChevronLeft,
    nextPage: mdiChevronRight,
    lastPage: mdiChevronDoubleRight
  },
  tree: {
    icon: mdiPlay
  },
  uploader: {
    done: mdiCheck,
    clear: mdiClose,
    add: mdiPlusBox,
    upload: mdiCloudUpload,
    removeQueue: mdiNotificationClearAll,
    removeUploaded: mdiCheckAll
  }
};
