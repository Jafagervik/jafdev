import Head from "next/head";
import Link from "next/link";
import IconButton from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <>
        <Head>
            <title>Jafagervik</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#DCE35B] to-[#45B649]">
        
        <h1 className="font-sans text-5xl">Hi, my name is Jørgen!</h1>

        <p className="text-3xl pt-2">
            I'm a norwegian software developer, currently writing my master thesis
            at NTNU.

            Experience: Parallel computing, Software development, AI development, DevOps,
            Linux, Jira, Confluence, C#, .NET, Julia, Python, C, C++, Rust, Go and more..
        </p>

        <Link href="https://github.com/Jafagervik">
            <GithubIcon />
        </Link>

        <Link href="https://crates.io/crates/ganban"> 
            <IconButton aria-label="delete" size="large">
                GanBan 
            </IconButton>
        </Link>

        <Link href="https://crates.io/crates/sukker">
            <IconButton aria-label="delete" size="large">
                Sukker
            </IconButton>
        </Link>

        <Link href="https://www.linkedin.com/in/j%C3%B8rgen-aleksander-fagervik-4556b0173/">
           <LinkedInIcon /> 
        </Link>

        <h2 className="text-2xl">Download CV</h2>

        <p>
            Get in contact!
            <EmailIcon />
        </p>


        </main>
    </>
  );
}
