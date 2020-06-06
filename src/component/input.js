const Input = ({ onChange, placeholder, input }) => {
    return (
        <div className="mb-4">
            <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={placeholder} input={input} />
        </div>
    );
}

export default Input;
