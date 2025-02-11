import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { createContact } from "~/data";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const contact = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    favorite: formData.get("favorite") === "true",
  };

  await createContact(contact);
  return redirect("/");
};

export default function NewContact() {
  return (
    <div>
      <Link to="/" className="back-link">
        ← 戻る
      </Link>
      <div className="contact-details">
        <h1>新規連絡先</h1>
        <Form method="post">
          <div>
            <label>
              <span>名前</span>
              <input type="text" name="name" required />
            </label>
          </div>
          <div>
            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
          </div>
          <div>
            <label>
              <span>電話番号</span>
              <input type="tel" name="phone" />
            </label>
          </div>
          <div>
            <label>
              <span>お気に入り</span>
              <input type="checkbox" name="favorite" value="true" />
            </label>
          </div>
          <button type="submit">保存</button>
        </Form>
      </div>
    </div>
  );
}
