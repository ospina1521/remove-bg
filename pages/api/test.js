// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from '#/providers/SupaBase/createClient'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    const abc = await supabase
      .from('Users')
      .insert({
        email: '123',
        name: '123',
        urlPhoto: '123'
      })
      .select()

    res.status(200).json({ abc })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
