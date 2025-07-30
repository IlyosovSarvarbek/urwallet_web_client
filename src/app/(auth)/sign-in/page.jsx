"use client"

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter()
  const {user, loginWithGoogle} = useAuth();
  useEffect(() => {
  if (user) router.replace("/");
}, [user, router]);

  return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-[var(--surface-primary)] p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-[var(--color-text-primary)]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--color-text-secondary)]">
            Track your expenses and manage your budget with ease.
          </p>
        </div>

        <div className="space-y-6">
          <button
          onClick={loginWithGoogle}
            type="button"
            className="group relative cursor-pointer w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand-primary)] transition-colors duration-200"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5"
                viewBox="0 0 488 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M488 261.8c0-17.8-1.5-35-4.3-51.6H249v97.7h134.7c-5.8 31-23 57.3-49 75.1v62.4h79.4c46.5-42.9 73.3-106 73.3-183.6z" fill="#4285F4" />
                <path d="M249 492c66.6 0 122.5-22 163.3-59.6l-79.4-62.4c-22.2 15-50.5 23.8-83.9 23.8-64.5 0-119.1-43.6-138.7-102.3H28v64.4C68.8 426.4 152.7 492 249 492z" fill="#34A853" />
                <path d="M110.3 291.5c-5.5-16.5-8.7-34.2-8.7-52.2s3.2-35.7 8.7-52.2V122.7H28C10.1 158.6 0 199.3 0 239.3s10.1 80.7 28 116.6l82.3-64.4z" fill="#FBBC05" />
                <path d="M249 97.7c36.2 0 68.5 12.5 94 37.1l70.5-70.5C371.4 24.2 315.6 0 249 0 152.7 0 68.8 65.6 28 122.7l82.3 64.4C129.9 141.3 184.5 97.7 249 97.7z" fill="#EA4335" />
              </svg>
            </span>
            <span className="pl-6">Sign in with Google</span>
          </button>

          <p className="text-center text-xs text-[var(--color-text-secondary)]">
            By signing in, you agree to our{' '}
            <a
              href="#"
              className="font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)]"
            >
              Terms of Service
            </a>.
          </p>
        </div>

        <div className="mt-6">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUxU-RaiVTJrpouyn2NOtwDFdLAsmcLVXw-1gBBY5d2LQyAVbiBVkmURxCZnH3EF2v117aiNjiiM_VUEF-FUEZvPCmKf-b4_42dxESoY08klmTareKdfdvKMNlKEhARhSpGck_Kf5eEBN1yglMw0IfbSMD3OjceQv_5sD4nEowsZxNZj1RB39poI2vDkaATEodRNg8MSo6AntO20luQmw-l_6psfxNefGGYjarckpEc6_rzn6WgiQw4RDCjUPqIt8cCq4ROgz-tQ"
            alt="Finance themed illustration"
            className="rounded-lg object-cover shadow-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
