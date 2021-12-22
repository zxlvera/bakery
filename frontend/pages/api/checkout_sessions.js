import Cors from 'cors';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const item = req.body;
    const transformedItem = {
      price_data: {
        currency: 'sgd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qty,
    };

    console.log(transformedItem);
    try {
      // Create Checkout Sessions from body params.
      await runMiddleware(req, res, cors);
      console.log('cors resolved');
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1K4RQLDfnDe9dPpKOUpgnSlI',
            quantity: 1,
          },
          {
            price: 'price_1K4RwFDfnDe9dPpKzNBr5IaJ',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

