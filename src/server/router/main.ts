import { createRouter } from "./context";
import { z } from "zod";
import { isAddress } from "ethers/lib/utils";

export const mainRouter = createRouter()
  .query("getUsername", {
    input: z
      .object({
        wallet: z.string().refine( address => isAddress(address), "Invalid EVM wallet address"),
      }),
    async resolve({ input, ctx }) {

      return await ctx.prisma.user.findFirst({
        where:{
          wallet: input.wallet
        }
      });
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  });
