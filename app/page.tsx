import React from "react";


import { cn } from "@/lib/utils";
import Container from "@/components/ui/container-view";
import Navbar from "@/components/ui/navbar-view";
import { ServerComponent } from "@/components/ui/user-session";
async function Page() {
   const user = await ServerComponent()
  return (
    <Container>
      <Navbar  user={user}/>
    </Container>
  );
}

export default Page;
