export function DegreeProgress() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Format</div>
            <button className="w-full flex items-center justify-between border rounded p-2">
              <span>Student View</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:w-3/4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-lg font-medium mb-4">Degree progress</h3>
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f2c75c"
                      strokeWidth="10"
                      strokeDasharray={`${69 * 2.83} 283`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-sm text-gray-500">UC GPA</div>
                    <div className="text-2xl font-bold">3.588</div>
                  </div>
                </div>
                <div className="text-center mt-2">Requirements</div>
              </div>

              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">In-progress classes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Preregistered classes</span>
                    </label>
                  </div>
                  <button className="bg-[#13639e] text-white px-4 py-1 rounded hover:bg-[#0e4c7a]">PROCESS</button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Major Requirements</div>
                      <div className="text-sm px-2 py-0.5 bg-amber-100 text-amber-800 rounded">75% Complete</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f2c75c] w-[75%]" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Remaining: 3 upper division courses</div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">General Education</div>
                      <div className="text-sm px-2 py-0.5 bg-red-100 text-red-800 rounded">60% Complete</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f2c75c] w-[60%]" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Remaining: 2 Arts & Humanities, 1 Social Science</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

