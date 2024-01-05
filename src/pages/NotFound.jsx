import { Button, Typography } from "keep-react"

import { House } from "phosphor-react";
import { Link } from "react-router-dom";

export const NotFound = () => {

  return (
    <div className="text-center items-center justify-center flex-col flex">
      <Typography variant="heading-1" className="text-center m-10 rubik">You are going out of the reality</Typography>
        <img src="/notfound.webp" className="items-center image-shadow" />
        <Link to={`/`}>
          <Button type="primary" size="sm">
              <House className="ml-2 h-3 w-3" />
              &nbsp;
              Go Home
          </Button>
        </Link>
    </div>
  )
}
