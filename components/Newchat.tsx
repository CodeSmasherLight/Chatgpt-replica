"use client";

import { db } from "@firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {useSession} from  "next-auth/react";
import { useRouter } from "next/navigation";

function Newchat() {

  const router = useRouter();

  const {data: session} = useSession();

  const createNewChat =async () => {
const doc = await addDoc(
  collection(db,"users", session?.user?.email!, "chats" ), {
  message: [],
  userId: session?.user?.email!,
  createdAt: serverTimestamp()
  });

  router.push(`/chat/${doc.id}`)

  };
  return (
   <div onClick={createNewChat} className="border-gray-700 border items-center justify-center ChatRow">
    <PlusIcon className="h-4 w-4" />
    <p>NewChat</p>
   </div>
  )
}

export default Newchat