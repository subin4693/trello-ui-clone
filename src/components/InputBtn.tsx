import React, { Dispatch, SetStateAction } from 'react'

type propType = { 
	cardId: string,
	setOpenInput: Dispatch<SetStateAction<boolean>>,
}

const InputBtn: React.FC<propType> = ({ cardId, setOpenInput }: propType) => {
	return (
		<div className="text-gray-600 rounded overflow-hidden min-w-[16rem]" >
			<button type="button" onClick={() => setOpenInput(prev => !prev)} className="px-2 py-1 text-left w-full h-full mt-2 hover:bg-gray-300">
				+ Add another text
			</button>
		</div>
	)
}

export default InputBtn