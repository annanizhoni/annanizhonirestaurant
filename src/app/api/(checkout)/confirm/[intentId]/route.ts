import { prisma } from "@/utils/connect";
import { NextApiResponse, NextApiRequest } from "next";

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  const { intentId } = req.query; // Access the intentId from the request query params

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId as string, // Cast intentId to string
      },
      data: { status: "Being prepared!" },
    });
    res.status(200).json({ message: "Order has been updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
