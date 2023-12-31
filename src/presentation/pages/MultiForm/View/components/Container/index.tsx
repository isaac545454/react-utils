import React from 'react'

type Props = React.ComponentProps<'div'>

export const Container: React.FC<Props> = ({ className, ...res }) => {
	return <div className={className} {...res} />
}
