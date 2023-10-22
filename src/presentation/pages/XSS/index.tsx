import React from 'react'
import { useSearchParams } from 'react-router-dom'

const XSS: React.FC = () => {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('q')

	return <div>{query}</div>
}

export default XSS
