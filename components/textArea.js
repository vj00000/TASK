export default function textArea({ disabled = false, className = '', ...props }) {
    return (
            // {...props}
        <textarea 
        className={disabled={disabled} 
        `${className} outline-none border rounded border-gray-200 h-10 px-6`} {...props} ></textarea>
            // disabled={disabled}
            // className={`${className} outline-none border rounded border-gray-200 h-10 px-6`}
            // {...props}
        // />
    )
}