import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TestComponent() {
    const { id } = useParams();

    return (
        <div>
            <h1>Test Component</h1>
        </div>
    )
}