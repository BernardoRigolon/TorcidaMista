import Header from "@/components/header";

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
          <Header />
          {children}
        </div>
    );
  }