import { prisma } from "@/utils/connect";
import { NextApiResponse, NextApiRequest } from "next";

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  const intentId = Array.isArray(req.query.intentId)
    ? req.query.intentId[0]
    : req.query.intentId;  

  if (typeof intentId !== "string") {
    return res.status(400).json({ message: "Invalid intentId" });
  }

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });
    res.status(200).json({ message: "Order has been updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
