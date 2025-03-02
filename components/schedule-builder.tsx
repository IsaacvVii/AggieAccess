"use client"

import { useState } from "react"
import { ChevronDown, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ScheduleBuilder() {
  const [schedule, setSchedule] = useState("1")

  return (
    <div className="container mx-auto">
      {/* Pass Information */}
      <div className="bg-white p-4 mb-4 border rounded shadow-sm">
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <div className="font-semibold">Pass 1: Feb 10, 2025 04:00 PM</div>
          <div className="font-semibold">Pass 2: Mar 03, 2025 04:00 PM</div>
        </div>
      </div>

      {/* Note */}
      <div className="bg-[#fff9e6] border border-[#f2c75c] p-3 mb-4 text-sm">
        <p>
          Note: Some courses may have reserved seats held for certain student populations. For more information, please
          visit: https://registrar.ucdavis.edu/registration/register-for-classes/reserved-seat.
        </p>
      </div>

      {/* Search */}
      <div className="bg-white p-4 mb-4 border rounded shadow-sm">
        <div className="mb-2">Search for courses by CRN, subject, instructor last name, or keyword:</div>
        <div className="flex">
          <Input placeholder="e.g. ECS70" className="max-w-md rounded-r-none focus-visible:ring-0" />
          <Button className="bg-[#13639e] hover:bg-[#0e4c7a] rounded-l-none">SEARCH</Button>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          <div className="bg-[#e6eef7] p-2 mb-2 border border-[#c5d5e6] flex justify-between items-center">
            <div className="font-bold">SCHEDULE:</div>
            <div className="flex items-center">
              <span>Schedule 1</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-white">
                Spring Quarter 2025
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                Finals
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                Print
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                View
              </Button>
            </div>
          </div>

          {/* Alerts */}
          <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
            <AlertDescription className="flex justify-between">
              <span>
                Please check your Pass 2 registration appointment. You may only register during your appointment time.
              </span>
              <X className="h-4 w-4 cursor-pointer" />
            </AlertDescription>
          </Alert>

          <Alert className="bg-[#fff3cd] border-[#ffeeba] text-[#856404] mb-2 relative">
            <AlertDescription>
              <div className="font-bold">WARNING:</div>
              <div>Our records indicate you are currently enrolled in the prerequisite course below:</div>
              <ul className="list-disc ml-6 mt-1">
                <li>MAT 022A</li>
              </ul>
              <div className="mt-2">
                If you receive a grade that does not meet the prerequisite requirement, the instructor of the course may
                request you be dropped from the course.
              </div>
              <div className="mt-2">
                Please refer to the course details from the class search results or the{" "}
                <a href="#" className="text-blue-600 underline">
                  general catalog
                </a>{" "}
                for the complete restrictions on this course. The prerequisites listed here are only course based
                requirements.
              </div>
            </AlertDescription>
            <X className="absolute top-2 right-2 h-4 w-4 cursor-pointer" />
          </Alert>

          {/* Course List */}
          <div className="mb-2">
            <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
              <AlertDescription className="flex justify-between">
                <span>This course is full and there are currently 23 student(s) on the waitlist.</span>
                <X className="h-4 w-4 cursor-pointer" />
              </AlertDescription>
            </Alert>

            <div className="border rounded mb-4 bg-white">
              <div className="flex justify-between items-center p-2 border-b">
                <div className="font-bold">ECS 171 001 – Machine Learning</div>
                <div>
                  <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                    Actions <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <div>Open / Waitlist: 0/23</div>
                    <div>CRN: 38262</div>
                    <div>Units: 4</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                    >
                      <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                    </Button>
                  </div>
                  <div>
                    <Badge className="bg-[#dc3545] text-white">Waitlisted</Badge>
                    <div className="text-sm mt-1">You are #2 on the waitlist</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
              <AlertDescription className="flex justify-between">
                <span>This course is full and there are currently 17 student(s) on the waitlist.</span>
                <X className="h-4 w-4 cursor-pointer" />
              </AlertDescription>
            </Alert>

            <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
              <AlertDescription className="flex justify-between">
                <span>You have exceeded the 19 unit limit.</span>
                <X className="h-4 w-4 cursor-pointer" />
              </AlertDescription>
            </Alert>

            <div className="border rounded mb-4 bg-white">
              <div className="flex justify-between items-center p-2 border-b">
                <div className="font-bold">ECS 188 002 – Ethics in an Age of Technology</div>
                <div>
                  <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                    Actions <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <div>Open / Waitlist: 0/17</div>
                    <div>CRN: 38266</div>
                    <div>Units: 4</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                    >
                      <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                    </Button>
                  </div>
                  <div>
                    <Badge className="bg-[#ffc107] text-[#212529]">Not Registered</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded mb-4 bg-white">
              <div className="flex justify-between items-center p-2 border-b">
                <div className="font-bold">CMN 001 A08 – Introduction to Public Speaking</div>
                <div>
                  <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                    Actions <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <div>Open / Waitlist: 0/2</div>
                    <div>CRN: 35028</div>
                    <div>Units: 4</div>
                    <div>
                      Letter Grading <Badge className="ml-1 bg-gray-200 text-gray-800 text-xs">GE</Badge>
                    </div>
                    <Button size="sm" variant="outline" className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                      SHOW DETAILS
                    </Button>
                  </div>
                  <div>
                    <Badge className="bg-[#28a745] text-white">Registered</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded mb-4 bg-white">
              <div className="flex justify-between items-center p-2 border-b">
                <div className="font-bold">ECS 132 001 – Probability & Statistical Modeling for Computer Science</div>
                <div>
                  <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                    Actions <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <div>Open / Waitlist: 0/1</div>
                    <div>CRN: 38252</div>
                    <div>Units: 4</div>
                    <div>
                      Letter Grading <Badge className="ml-1 bg-gray-200 text-gray-800 text-xs">GE</Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                    >
                      <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                    </Button>
                  </div>
                  <div>
                    <Badge className="bg-[#28a745] text-white">Registered</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-[#f2c75c] p-2 font-bold border border-[#e6b94c] mb-2">DEGREE PROGRESS</div>
          <div className="bg-white border mb-4 p-4">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">Overall Progress</div>
                <div className="text-sm text-[#13639e]">69%</div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#f2c75c] transition-all duration-300" style={{ width: "69%" }} />
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Major Requirements</span>
                  <span className="text-[#13639e]">75%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#f2c75c]" style={{ width: "75%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>General Education</span>
                  <span className="text-[#13639e]">60%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#f2c75c]" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
            <Button
              className="w-full bg-[#13639e] hover:bg-[#0e4c7a]"
              onClick={() => document.querySelector('[value="my-degree"]')?.dispatchEvent(new MouseEvent("click"))}
            >
              LEARN MORE
            </Button>
          </div>

          <div className="bg-[#f2c75c] p-2 font-bold border border-[#e6b94c] mb-2 flex justify-between items-center">
            <div>RECOMMENDED COURSES</div>
            <Button size="sm" variant="outline" className="bg-white text-xs">
              Filter <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <div className="bg-white border mb-4">
            <div className="p-2 border-b bg-[#f8f9fa]">Based on Your Degree Requirements:</div>

            <div className="border-b p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">ECS 188 – Ethics in an Age of Technology</div>
                  <div className="text-sm text-gray-600">Required for graduation</div>
                </div>
                <Badge className="bg-[#dc3545] text-white">Required</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2 bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                ADD TO SCHEDULE
              </Button>
            </div>

            <div className="border-b p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">ECS 154A – Computer Architecture</div>
                  <div className="text-sm text-gray-600">Major requirement</div>
                </div>
                <Badge className="bg-[#ffc107] text-[#212529]">Major Core</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2 bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                ADD TO SCHEDULE
              </Button>
            </div>

            <div className="border-b p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">AHI 001A – Art History</div>
                  <div className="text-sm text-gray-600">Fulfills Arts & Humanities GE</div>
                </div>
                <Badge className="bg-[#28a745] text-white">GE</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2 bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                ADD TO SCHEDULE
              </Button>
            </div>

            <div className="p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">SOC 001 – Introduction to Sociology</div>
                  <div className="text-sm text-gray-600">Fulfills Social Sciences GE</div>
                </div>
                <Badge className="bg-[#28a745] text-white">GE</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2 bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                ADD TO SCHEDULE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

