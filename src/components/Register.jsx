import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [user, setUser] =useState({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate()
  const [loading, setLoading] =useState(false);
  const onSignup = async () => {
    try {
        setLoading(true);
        const response = await axios.post("https://expense-tracker-task-production.up.railway.app/user/register", user);
        console.log("Signup success", response.data);
        navigate("/login");
        
    } catch (error) {
        console.log("Signup failed", error.message);
        
        // toast.error(error.message);
    }finally {
        setLoading(false);
    }
}
  return (
    <div key="1" className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center p-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-[#1E399F]">SIGN UP</h1>
        <div className="space-y-4">
          <Input
            placeholder="User Name"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Input
            placeholder="Email address"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <div className="relative space-y-2">
            <Input
              placeholder="Create Password"
              type="password"
              value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button
              className="absolute top-1 right-1 h-7 w-7"
              size="icon"
              variant="ghost"
            >
              <EyeIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative space-y-2">
            <Input placeholder="Confirm Password" type="password" />
            <Button
              className="absolute top-1 right-1 h-7 w-7"
              size="icon"
              variant="ghost"
            >
              <EyeIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label className="text-sm font-medium leading-none" htmlFor="terms">
              I accept the Terms and condition
            </label>
          </div>
          <Button onClick={onSignup} className="w-full bg-green-500 hover:bg-[#1E399F]">
            Register
          </Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="text-white max-w-xs text-center">
          <img src="public/task_logo.png" />
        </div>
      </div>
    </div>
  );
}
