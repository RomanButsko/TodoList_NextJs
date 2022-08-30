const CurrentDate = ()=> {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Deс'];
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const current = new Date();
    const date = `${day[current.getDay()]}, ${current.getDate()} ${months[current.getMonth()+1]}`;
    return <>
        {date}
    </>
    
}

export default CurrentDate
