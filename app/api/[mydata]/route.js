import mongooseConnect from '@/app/lib/mongoose';
import { MyData } from '@/app/models/MyData';

export default async function getArticles(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await MyData.findOne({ _id: req.query.id }));
    } else {
      res.json(await MyData.find());
    }
  }
}