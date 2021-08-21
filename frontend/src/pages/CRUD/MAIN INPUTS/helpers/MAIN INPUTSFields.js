

const MAIN INPUTSFields = {
	id: { type: 'id', label: 'ID' },
Enquiry No: { type: 'string', label: 'Enquiry No',

    },
Project Name: { type: 'string', label: 'Project Name',

    },
CODE: { type: 'int', label: 'CODE',

    },
PRODUCT TYPE: { type: 'enum', label: 'PRODUCT TYPE',

    options: [

    { value: 'ZEXIA-M (WITH MR)', label: 'ZEXIA-M (WITH MR)' },

    { value: 'REXIA-M (WITHOUT MR)', label: 'REXIA-M (WITHOUT MR)' },

]

    },
ENQUIRY OPTION: { type: 'enum', label: 'ENQUIRY OPTION',

    options: [

    { value: 'CAR SIZE FIXED ', label: 'CAR SIZE FIXED ' },

]

    },

}

export default MAIN INPUTSFields;
