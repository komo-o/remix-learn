export type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  favorite: boolean;
};

export const contacts: Contact[] = [
  {
    id: "1",
    name: "山田太郎",
    email: "taro@example.com",
    phone: "03-1234-5678",
    favorite: true,
  },
  {
    id: "2",
    name: "鈴木花子",
    email: "hanako@example.com",
    favorite: false,
  },
];

export function getContacts() {
  return contacts;
}

export function getContact(id: string) {
  return contacts.find((contact) => contact.id === id);
}
