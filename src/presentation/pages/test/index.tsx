export function DataList() {
	return (
		<div>
			<div>
				<label htmlFor="ice-cream-choice">Choose a flavor:</label>
				<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
				<datalist id="ice-cream-flavors">
					<option value="Chocolate" />
					<option value="Coconut" />
					<option value="Mint" />
					<option value="Strawberry" />
					<option value="Vanilla" />
				</datalist>
			</div>
			<details>
				<summary>Alguns detalhes</summary>
				<p>Mais informações sobre os detalhes.</p>
			</details>
		</div>
	)
}
