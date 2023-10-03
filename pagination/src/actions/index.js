const incNumber = (num)=>{
    return {
        type:"INC",
        payload:num
    }
}

const decNumber = (num)=>{
    return {
        type:"DEC",
        payload:num
    }
}

export {incNumber,decNumber}