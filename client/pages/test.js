export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Scally ERP - Test Page
        </h1>
        <p className="text-gray-600">
          If you can see this page, the frontend is working correctly!
        </p>
        <div className="mt-4 p-4 bg-green-50 rounded-md">
          <p className="text-green-800 text-sm">
            ✅ Frontend server is running successfully
          </p>
        </div>
      </div>
    </div>
  );
} 