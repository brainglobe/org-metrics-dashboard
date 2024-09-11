import { Layout } from '@/components/Layout';
import RepositoriesTable from '@/components/RepositoriesTable';

export default function NIUPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl h-screen">
      <Layout>
        <RepositoriesTable />
      </Layout>
    </main>
  );
}
