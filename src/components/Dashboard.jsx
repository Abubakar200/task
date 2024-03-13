import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCardIcon, HelpCircleIcon, LayoutDashboardIcon, LogOutIcon, SettingsIcon, WalletCardsIcon } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f0f2f5]">
      <nav className="flex flex-col w-64 h-full py-4 bg-[#0a2c83]">
        <div className="flex flex-col items-center mb-10">
          <img
            alt="Logo"
            className="mb-3"
            height="40"
            src="/2.png"
            style={{
              aspectRatio: "120/40",
              objectFit: "cover",
            }}
            width="120"
          />
          <h2 className="text-lg font-semibold text-white">IN</h2>
        </div>
        <div className="flex flex-col px-4 mt-10 space-y-2 text-white">
          <a className="flex items-center space-x-3 text-sm font-medium bg-[#1e2a38] p-2 rounded-md" href="#">
            <LayoutDashboardIcon className="text-white" />
            <span>Transaction</span>
          </a>
          <a
            className="flex items-center space-x-3 text-sm font-medium p-2 rounded-md hover:bg-[#1e2a38] transition-colors"
            href="#"
          >
            <CreditCardIcon className="text-white" />
            <span>Payments</span>
          </a>
          <a
            className="flex items-center space-x-3 text-sm font-medium p-2 rounded-md hover:bg-[#1e2a38] transition-colors"
            href="#"
          >
            <WalletCardsIcon className="text-white" />
            <span>Cards</span>
          </a>
        </div>
        <div className="mt-auto px-4">
          <a
            className="flex items-center space-x-3 text-sm font-medium text-white p-2 rounded-md hover:bg-[#1e2a38] transition-colors"
            href="#"
          >
            <LogOutIcon className="text-white" />
            <span>Logout</span>
          </a>
        </div>
      </nav>
      <main className="flex-1">
        <header className="flex items-center justify-between px-6 py-4 bg-[#09409c]">
          <h1 className="text-xl font-semibold text-white">CREATE TRANSACTION</h1>
          <div className="flex items-center space-x-4">
            <HelpCircleIcon className="text-white" />
            <SettingsIcon className="text-white" />
            <Avatar>
              <AvatarImage alt="Andrew Yo" src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="px-10 py-6">
          <Card className="max-w-4xl mx-auto bg-white shadow-lg">
            <CardContent>
              <form>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="type">
                      Type
                    </label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Credit" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="credit">Credit</SelectItem>
                        <SelectItem value="debit">Debit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="source">
                      Source
                    </label>
                    <Select>
                      <SelectTrigger id="source">
                        <SelectValue placeholder="12 h" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="bank">Bank</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="category">
                      Category
                    </label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium" htmlFor="amount">
                      Amount
                    </label>
                    <Input id="amount" placeholder="Amount" />
                  </div>
                  <div className="flex flex-col space-y-1.5 col-span-2">
                    <label className="text-sm font-medium" htmlFor="description">
                      Description
                    </label>
                    <Textarea id="description" placeholder="Description" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Create</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

