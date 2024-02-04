import React, { useState } from 'react'

export function useRevision() {
    const [isChat , setIschat] = useState(false);
    console.log(isChat);
    return{isChat , setIschat}
}
