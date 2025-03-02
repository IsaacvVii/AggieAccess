import { Info, CreditCard, Users, User, Shield, FileText, RefreshCw, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function MyBill() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Announcement Card */}
          <Card className="mb-6">
            <div className="bg-gray-100 p-3 font-semibold border-b">Announcement</div>
            <div className="p-4 text-sm space-y-4">
              <p>
                Spring 2025 tuition and fees have been assessed, and all authorized financial aid for the term should be
                credited to your UC Davis account. This appears as Estimated Financial Aid on your statement and will be
                applied to your outstanding balance. Please refer to the "New Total Balance" in your statement as this
                is what you will owe for spring quarter. If you have a negative balance, you have a credit on your
                account and you do not owe anything. If you have an Amount Due, you must pay that amount by the Fee
                Payment Deadline, March 15, 2025, to avoid being dropped from your Spring Quarter Classes. Please note
                for Financial Aid to fully disburse to your account on March 21, 2025, you must be enrolled in a minimum
                of 12 units (waitlisted units do not count).
              </p>
              <p className="font-semibold">
                For Graduate Students ONLY, you have two deadlines on this statement, the Final Fee Payment deadline for
                Winter Quarter is Thursday, February 27, 2025. The Final Fee Payment Deadline for Spring Quarter is May
                22, 2025. Any Graduate Student with a balance after the Graduate Final Fee Payment Deadline, will be
                canceled from their future term. All registered classes for the future term will be dropped for
                non-payment and a late registration fee will be assessed.
              </p>
            </div>
          </Card>

          {/* Payment Profile Notice */}
          <Alert className="mb-4 bg-[#fff9e6] border-[#f2c75c]">
            <AlertDescription className="flex gap-3">
              <CreditCard className="h-5 w-5 text-[#856404]" />
              <div>
                Save time when paying. Set up a preferred payment profile in the{" "}
                <span className="text-purple-700 font-medium">Payment Profile</span> page.
              </div>
            </AlertDescription>
          </Alert>

          {/* Refund Setup Notice */}
          <Alert className="mb-6 bg-[#fff9e6] border-[#f2c75c]">
            <AlertDescription className="flex gap-3">
              <RefreshCw className="h-5 w-5 text-[#856404]" />
              <div>
                To sign up for direct deposit of your refunds, complete your setup in the{" "}
                <span className="text-purple-700 font-medium">Refund Account Setup</span> page.
              </div>
            </AlertDescription>
          </Alert>

          {/* Student Account Section */}
          <Card className="mb-6">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Student Account</h2>
              <div className="text-gray-600">ID: xxxxx2910</div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="font-medium text-purple-700">Balance</div>
                <div className="font-semibold">$11,605.28</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium text-purple-700">Estimated Financial Aid</div>
                <div className="font-semibold">$12,583.00</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium text-purple-700">Balance including estimated aid</div>
                <div className="font-semibold text-green-600">-$977.72</div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline">View Activity</Button>
                <Button variant="outline">Enroll in Payment Plan</Button>
                <Button className="bg-[#f2c75c] text-[#13639e] hover:bg-[#e6b94c]">Make Payment</Button>
              </div>
            </div>
          </Card>

          {/* Statements Section */}
          <Card>
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">Statements</h2>
            </div>
            <div className="p-4">
              <Alert className="mb-4">
                <AlertDescription className="flex gap-3">
                  <Info className="h-5 w-5" />
                  <div>Click the button to view your current account balance and details.</div>
                </AlertDescription>
              </Alert>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-medium">Your latest eBill Statement</div>
                  <div className="text-purple-700">(2/21/25) February 2025 Statement</div>
                </div>
                <Button variant="outline">View OnDemand Statement</Button>
              </div>
              <div className="flex justify-end">
                <Button variant="outline">View Statements</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 space-y-4">
          {/* My Profile Setup */}
          <Card>
            <div className="p-3 bg-gray-100 font-semibold border-b">My Profile Setup</div>
            <div className="divide-y">
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <Users className="h-5 w-5 mr-3" />
                Authorized Users
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <User className="h-5 w-5 mr-3" />
                Personal Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <CreditCard className="h-5 w-5 mr-3" />
                Payment Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <Shield className="h-5 w-5 mr-3" />
                Security Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <FileText className="h-5 w-5 mr-3" />
                Consents and Agreements
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <RefreshCw className="h-5 w-5 mr-3" />
                Electronic Refunds
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <Clock className="h-5 w-5 mr-3" />
                Auto Bill Pay
              </Button>
            </div>
          </Card>

          {/* Term Balances */}
          <Card>
            <div className="p-3 bg-gray-100 font-semibold border-b">Term Balances</div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div>Spring Quarter,</div>
                  <div>202503</div>
                </div>
                <div className="text-green-600 font-medium">-$977.72</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

