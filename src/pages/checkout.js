import Image from "next/image";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
debugger
const publicKey = process.env.stripe_public_key.toString();
const stripePromise = loadStripe("pk_test_51JPNiCSF2ouX2yKjLcPu43B2jP0yjNMrlPc9djMmHTkWVZNPdc4VG8t4vbI6lwa4Qtd9n3ZZFYcW7E5wEDzIjpW800MSvVI4Sa");

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // call backend to create a checkout session
        const checkoutSession = await axios.post("/api/create-checkout-session", {
            items: items,
            email: session.user.email,
        });
        
        // redirect user/customer to stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if(result.error) alert(result.error.message);
    };

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>

                        {items.map((item, i) => (
                            <CheckoutProduct 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    
                    </div>
                </div>
                
                {/* Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{" "}
                                <span>
                                    <Currency quantity={total} currency="GBP" />
                                </span>
                            </h2>
                            <button role="link" onClick={createCheckoutSession} disabled={!session} className={`button mt-2 ${
                                !session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Sign into checkout":"Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
