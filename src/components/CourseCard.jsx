import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

  const CourseCard = (props, path) => {
    return(
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p>{props.content}</p>
            </CardContent>

            <CardFooter>
                <Button variant="destructive" asChild>
                    <Link href="/login">Buy Now</Link> 
                </Button>
            </CardFooter>
        </Card>
    
    )
  }

  export default CourseCard;