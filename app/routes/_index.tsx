import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getContacts } from "~/data";
import type { Contact } from "~/data";

export const loader: LoaderFunction = async () => {
  return getContacts();
};

export default function Index() {
  const contacts = useLoaderData<Contact[]>();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>連絡先一覧</h1>
        <Link to="/contact/new" className="button">
          新規作成
        </Link>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              <div>
                <h2>{contact.name}</h2>
                <p>{contact.email}</p>
                {contact.phone && <p>{contact.phone}</p>}
                {contact.favorite && <span>★</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
