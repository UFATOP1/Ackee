'use strict'

module.exports = (body, favicon, styles, scripts, variables) => `
	<!doctype html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="theme-color" content="#282d2d">
			<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large">
			<title>PNCKDEVAPP ANALYTICS วิเคราะห์และการรายงานข้อมูลเว็บ</title>
			<meta name="description" content="วิเคราะห์ เว็บไซต์ เพื่อการวัดการรวบรวม การวิเคราะห์และการรายงาน ข้อมูลเว็บเพื่อทำความเข้าใจ และเพิ่มประสิทธิภาพการใช้งานเว็บ">
			<meta property="og:locale" content="th_TH">
			<meta property="og:type" content="website">
			<meta property="og:title" content="วิเคราะห์ เว็บไซต์ เพื่อการวัดการรวบรวม การวิเคราะห์และการรายงาน ข้อมูลเว็บเพื่อทำความเข้าใจ และเพิ่มประสิทธิภาพการใช้งานเว็บ">
			<meta property="og:description" content="การวิเคราะห์เว็บไม่ได้ เป็นเพียงกระบวนการใน การวัดปริมาณการเข้าชมเว็บเท่านั้น แต่สามารถใช้เป็นเครื่องมือ สำหรับการวิจัยทางธุรกิจและ การตลาดและประเมินและ ปรับปรุงประสิทธิภาพ ของเว็บไซต์ได้">
			<meta property="og:url" content="https://ahrefs.netlify.app/">
			<meta property="og:site_name" content="PNCKDEVAPP ANALYTICS">
			
			<!-- Favicon -->
			<link rel="shortcut icon" href="${ favicon }" type="image/x-icon">

			<!-- CSS -->
			${ styles.map((src) => `<link rel="stylesheet" href="${ src }">`).join('') }
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;1,300&display=swap" rel="stylesheet">
			<style>
			body {
				font-family:'Kanit',sans-serif !important;
			}
			.footbar {
				text-align: center;
				font-size: 15px;
				color:white;
			}
			</style>

			<!-- JS -->
			${ scripts.map((src) => `<script defer src="${ src }"></script>`).join('') }
			
			<!-- Variables -->
			<script>
				window.env = ${ JSON.stringify(variables) }
			</script>
		</head>
		<body>

			${ body }

			<footer class="footbar">
			<p>ANALYTICS : PNCKDEVAPP</p>
			<span>© 2021 VeryGood<a href="https://ufapro888s.info">เว็บพนันบอล</a></span>
		  </footer>
		  
		</body>
	</html>
`