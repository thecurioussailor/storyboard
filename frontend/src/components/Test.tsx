function Test() {
  return (
    <div>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative text-4xl font-bold">
        <span className="block relative overflow-hidden h-[1em]">
          <span className="absolute inset-0 transition-transform duration-300 ease-custom hover:-translate-y-full">hero</span>
          <span className="absolute inset-0 transition-transform duration-300 ease-custom translate-y-full hover:translate-y-0">hero</span>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Test