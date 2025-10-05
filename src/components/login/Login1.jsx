import React, { useState } from "react";
import Logo from "../../assets/manuecom.png";

function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login with:", { email, password });
  };

  const handleSignUp = () => {
    console.log("Navigate to sign up");
  };

  const handleForgotPassword = () => {
    console.log("Navigate to forgot password");
  };

  return (
    <>
      <div className="min-h-screen mt-4 md:mt-12 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[98%] md:max-w-[90%] flex items-center justify-between gap-8">
          <div className="hidden lg:flex flex-col justify-center items-center mb-[260px]">
            <div>
              <img
                src={Logo}
                alt="Artestor Logo"
                className="w-[438px] h-[438px]"
              />
            </div>

            <p className="text-[18px] font-normal text-[#6B4226] leading-relaxed  max-w-xs -mt-40">
              Allows you to get funding,
              <br />
              resources and investor connect
            </p>
          </div>

          {/* Right Side - Login Box */}
          <div className="w-full lg:w-auto lg:min-w-[480px] flex flex-col justify-center items-center rounded-[20px] shadow-xl border-[19px] border-[#6B4226] p-8 md:p-12">
            {/* Logo */}
            <img
              src={Logo}
              alt=""
              className="w-[298px] h-[298px] md:-mt-[40px] -mt-[20px]"
            />
            {/* Subtitle */}
            <p className="text-center text-[15px] font-medium text-[#6B4226] mb-8 -mt-[20px]">
              Sign Up to explore the tools and resources of the portal
            </p>
            {/* Input Fields */}
            <div className="space-y-6">
              {/* Email/Phone Input */}
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] focus:border-transparent text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
                  placeholder="Email or Phone"
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] focus:border-transparent text-[14px] text-[#111827] placeholder:text-[#9CA3AF] pr-12"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
                  >
                  </button>
                </div>
              </div>

              {/* Terms & Privacy */}
              <div className="text-[11px] text-[#9CA3AF] leading-relaxed">
                People who use our Service may have uploaded your contact
                details and information to Artestor.{" "}
                <span className="text-[#6B4423] cursor-pointer hover:underline">
                  Learn more
                </span>
                <br />
                By signing up, you agree to our{" "}
                <span className="text-[#6B4423] cursor-pointer hover:underline">
                  Terms
                </span>
                ,{" "}
                <span className="text-[#6B4423] cursor-pointer hover:underline">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-[#6B4423] cursor-pointer hover:underline">
                  Cookies Policy
                </span>
                .
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full bg-[#6B4423] text-white font-normal py-3.5 rounded-lg hover:bg-[#5A3A1F] transition-colors duration-200 text-[14px] shadow-md"
              >
                Log in
              </button>

              {/* Sign Up Button */}
              <button
                onClick={handleSignUp}
                className="w-full bg-[#6B4423] text-white font-normal py-3.5 rounded-lg hover:bg-[#5A3A1F] transition-colors duration-200 text-[15px] shadow-md"
              >
                Sign up
              </button>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  onClick={handleForgotPassword}
                  className="text-[13px] text-[#6B4423] hover:underline font-medium"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
      <div className="hidden md:block mx-36 mt-28 pb-12">
        <p className="text-[16px] leading-relaxed text-[#0f1623]">
          Terms, Privacy Disclosures Cookie Settings © Artestor Technologies LLP
        </p>
      </div>
    </>
  );
}

export default Login1;
