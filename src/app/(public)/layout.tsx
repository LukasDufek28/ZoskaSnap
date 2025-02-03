// src/app/(public)/layout.tsx

export const metadata = {
  title: "Public Pages | ZoškaSnap",
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main> {/* ✅ Ensure it's present in both SSR and Client */}
      {children}
    </main>
  );
}
