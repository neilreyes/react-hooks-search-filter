import React from 'react'

const LayoutToggle = ({summaryLayout, setSummaryLayout}) => {
	const onChange = (e) => {
		console.log(e.target.value);
		setSummaryLayout(e.target.value);
	}
	return (
		<div style={{marginBottom: '20px', marginTop: '20px'}}>
			Layout: <br/>
			<label htmlFor="layout">Row
			<input type="radio" name='layout' value='row' checked={summaryLayout ==='row'} onChange={onChange}/></label>
			<label htmlFor="layout">Grid
			<input type='radio' name='layout' value='grid' checked={summaryLayout ==='grid'} onChange={onChange}/></label>
		</div>
	)
}

export default LayoutToggle
