// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface ProfileData {
  name: string;
  bio: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileData>
) {
  res.status(200).json({
    name: "my name",
    bio: "my bio ...",
  });
}
