import Button from "@/components/Button";
import Header from "@/components/Header";

//Login page
export default function Login() {
    return (
      <>
      <Header />
      <div className="h-[calc(100vh-92px)] md:h-[calc(100vh-98px)] xl:h-[calc(100vh-130px)] flex flex-col justify-center max-w-lg mx-auto gap-6">
        <h3 className="text-2xl md:text-4xl font-medium text-center">Let's continue where you <br /><span className="text-lime-400">left off</span></h3>
        {/* <h2 className="font-medium text-center text-3xl">Log in</h2> */}
        <form className="flex flex-col  justify-center items-center gap-4">
          <input type="email"className="input" placeholder="Email or Username" required/>
          <input type="password" className="input" placeholder="Password" required />
          <Button variant="primary" className="rounded-lg w-full">Log in</Button>
          <h2>Don't have an account yet? <a href="/signup" className="text-lime-400">Sign up</a></h2>
        </form>
      </div>
      </>
    );
  }
  