import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Your existing document fetching logic
        const documents = await fetchDocuments();
        return NextResponse.json(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        return NextResponse.json(
            { error: 'Failed to fetch documents' },
            { status: 500 }
        );
    }
}