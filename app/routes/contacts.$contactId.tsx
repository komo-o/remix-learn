import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getContact } from "~/data";
import type { Contact } from "~/data";

export const loader: LoaderFunction = async ({ params }) => {
  const contact = getContact(params.contactId as string);
  if (!contact) {
    throw new Error("Contact not found");
  }
  return contact;
};

export default function ContactRoute() {
  const contact = useLoaderData<Contact>();

  return (
    <div className="contact-details">
      <h1>{contact.name}</h1>
      <div>
        {contact.favorite && <span className="favorite">★</span>}
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        {contact.phone && (
          <p>
            <strong>電話:</strong> {contact.phone}
          </p>
        )}
      </div>
    </div>
  );
}
