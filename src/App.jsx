import { useCallback, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let pass = "";
        let template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) {
            template += "1234567890";
        }
        if (specialCharAllowed) template += "!@#$%^&*()";
        for (let i = 0; i < length; i++) {
            const char = Math.floor(Math.random() * template.length);
            pass += template.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, specialCharAllowed]);

    useEffect(() => {
        generatePassword();
    }, [length, numberAllowed, specialCharAllowed]);

    const getPasswordStrength = () => {
        let strength = 0;
        if (password.length > 8) strength++;
        if (password.match(/[0-9]+/)) strength++;
        if (password.match(/[^A-Za-z0-9]+/)) strength++;
        return ["Weak", "Medium", "Strong"][strength - 1] || "Very Weak";
    };

    const copyPasswordToClipboard = async () => {
        try {
            await window.navigator.clipboard.writeText(password);
            passwordRef.current?.select();
            toast.success("Password Copied Successfully");
        } catch (err) {
            toast.error("Failed to copy password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDE8C2] p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <div>
                    <Toaster position="top-center" />
                </div>

                <h1 className="text-3xl text-gray-800 text-center mb-8 font-bold">
                    Password Generator
                </h1>

                <div className="flex rounded-lg mb-6 overflow-hidden border-2 border-gray-200">
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        className="outline-none w-full py-3 px-4 bg-gray-50"
                        ref={passwordRef}
                        readOnly
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className="outline-none bg-gray-800 text-white px-6 py-2 font-medium hover:bg-gray-700 transition-colors"
                    >
                        Copy
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-600">
                                Password Length
                            </label>
                            <span className="text-sm font-bold text-gray-800">
                                {length}
                            </span>
                        </div>
                        <input
                            type="range"
                            min={6}
                            max={20}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-600">
                                Include Numbers
                            </label>
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-gray-800 border-2 border-gray-300 rounded focus:ring-0 cursor-pointer"
                                checked={numberAllowed}
                                onChange={() =>
                                    setNumberAllowed((prev) => !prev)
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-600">
                                Include Special Characters
                            </label>
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-gray-800 border-2 border-gray-300 rounded focus:ring-0 cursor-pointer"
                                checked={specialCharAllowed}
                                onChange={() =>
                                    setSpecialCharAllowed((prev) => !prev)
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-600">
                            Strength:{" "}
                            <span
                                className={`font-bold ${
                                    getPasswordStrength() === "Strong"
                                        ? "text-green-600"
                                        : getPasswordStrength() === "Medium"
                                        ? "text-yellow-600"
                                        : "text-red-600"
                                }`}
                            >
                                {getPasswordStrength()}
                            </span>
                        </div>
                        <button
                            className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                            onClick={generatePassword}
                        >
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
