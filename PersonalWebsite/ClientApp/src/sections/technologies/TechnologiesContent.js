import React from 'react';

function TechnologiesContent() {
  return (
	<article className="Technologies__content row">
		<div className="col-md-4">
			<h4>Front-end</h4>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>LESS</li>
				<li>SCSS</li>
				<li>Bootstrap</li> 
				<li>JavaScript</li>
				<li>React.js + Redux</li>
			</ul>
		</div>
		<div className="col-md-4">
			<h4>Back-end</h4>
			<ul>
<li>.NET Framework / .NET Core (C#)</li>
<li>Entity Framework</li>
<li>MSSQL</li>
<li>Wordpress</li>
<li>PHP</li>
			</ul>
		</div>
		<div className="col-md-4">
			<h4>Programy</h4>
			<ul>
				<li>Visual Studio</li>
				<li>Sublime Text 3</li>
				<li>Adobe Photoshop</li>
			</ul>
		</div>
	</article>
  );
}

export default TechnologiesContent;