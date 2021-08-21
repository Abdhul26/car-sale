

const Application sizeFields = {
	id: { type: 'id', label: 'ID' },
Capacity(person/kg): { type: 'string', label: 'Capacity(person/kg)',

    },
Openning Types: { type: 'string', label: 'Openning Types',

    },
Openning Width(mm): { type: 'int', label: 'Openning Width(mm)',

    },
Car Inside Width: { type: 'int', label: 'Car Inside Width',

    },
Car Inside Depth: { type: 'int', label: 'Car Inside Depth',

    },
Door Offset: { type: 'enum', label: 'Door Offset',

    options: [

    { value: 'Without door', label: 'Without door' },

    { value: '25mm door offset', label: '25mm door offset' },

]

    },

}

export default Application sizeFields;
