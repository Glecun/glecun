<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsi="http://www.w3schools.com">

	<xsl:output method="xml" indent="yes" encoding="UTF-8" doctype-public="-//W3C//DTD XHTML+RDFa 1.0//EN" doctype-system="http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd"/>

	<xsl:template match="/">
		
		<html version="XHTML+RDFa 1.0" xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
			<head>
				<meta http-equiv="Content-Type" property="dc:format" content="text/html; charset=utf-8" />
				<meta name="dc:language" content="fr" />
				<title property="dc:title" >CV</title>
				<script src="https://code.jquery.com/jquery-3.1.1.min.js"
						integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"/>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>
				<link rel="stylesheet" type="text/css" href="cv_greg.css" />
			</head>
			
			<body typeof="foaf:Person" about="http://glecun.fr/#aboutMe">
				<div class="bubble-lang">
					<xsl:choose>
						<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
							<!--<a href="cv_greg_en.xml"><span class="bounceIn">EN</span></a>-->
							<a href="#"><span class="bounceIn active">FR</span></a>
						</xsl:when>
						<!--
						<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
							<a href="#"><span class="bounceIn active">EN</span></a>
							<a href="cv_greg.xml"><span class="bounceIn">FR</span></a>
						</xsl:when>
						-->
					</xsl:choose>
				</div>
				<xsl:choose>
					<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
						<div>
							<a href="../export/cv.pdf"><button class="rounded-button"><i class="fa fa-download"/></button></a>
						</div>
					</xsl:when>
				</xsl:choose>

				<div class="header">
					<div class="sep_grey_vert"></div>
					<div class="div_grey"></div>
					<div class="div_desc">
						<h1 class="name" about="http://glecun.fr/#aboutMe" property="foaf:name">	
							<xsl:value-of select="xsi:cv/xsi:general/xsi:prenom"/>
							<xsl:text>        </xsl:text>
							<xsl:value-of select="xsi:cv/xsi:general/xsi:nom" />
						</h1>
						<h2 class="sous_name">	
							<xsl:value-of select="xsi:cv/xsi:general/xsi:emploi_actuelle"/>
						</h2>

						<div class="div_description_infos">
							<p style="display: inline-block;">
								<i class="fa fa-quote-left" ></i>
								<span class="info"><xsl:value-of disable-output-escaping="yes" select="xsi:cv/xsi:general/xsi:description"/></span>
							</p>
							<p property="foaf:based_near">
								<i class="fa fa-map-marker-alt"  style="margin-left: 3px;"></i>
								<span class="info"><xsl:value-of select="xsi:cv/xsi:general/xsi:adresse"/></span>
							</p>

							<p>
								<i class="fa fa-globe-americas"></i>
								<xsl:variable name= "url_site" select="xsi:cv/xsi:general/xsi:url_site/text()"/>
								<span class="info"><a class="a_url_site" rel="foaf:homepage" href="{$url_site}"><xsl:value-of select="xsi:cv/xsi:general/xsi:url_site"/></a></span>
							</p>

							<p>
								<i class="fa fa-envelope"></i>
								<xsl:variable name= "email" select="xsi:cv/xsi:general/xsi:email/text()"/>
								<span class="info"><a class="a_url_site" rel="foaf:mbox" href="mailto:{$email}"><xsl:value-of select="xsi:cv/xsi:general/xsi:email"/></a></span>
							</p>
						</div>
					</div>
				
					<div class="div_img" typeof="foaf:Image" rev="foaf:depiction">
						<xsl:variable name= "url_photo" select="xsi:cv/xsi:general/xsi:url_photo/text()"/>
						<img class="img" property="foaf:img" alt="" src="{$url_photo}" />
					</div>
					<div class="clear"/>
				</div>
				
				<div class="content">
					<div class="sep_grey_vert"></div>
					<div class="content_left">
						<div class="title">
							<h1 class="title_h1" about="http://glecun.fr/#aboutMe"><i class="fa fa-suitcase" ></i>
								<xsl:choose>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
										Expériences
									</xsl:when>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
										Employement History
									</xsl:when>
								</xsl:choose>
							</h1>
						</div>
						<xsl:for-each select="xsi:cv/xsi:experiences/xsi:experience">
							<div class="content_double">
								<div class="left">
									<h3 class="title_content_double"><xsl:value-of select="xsi:nom_poste"/></h3>
									<p class="lieu_annee" property="aiiso:organization">
										<xsl:value-of select="xsi:nom_entreprise"/><br/>
										<xsl:value-of select="xsi:periode/xsi:date[1]/xsi:annee"/><xsl:text> - </xsl:text><xsl:value-of select="xsi:periode/xsi:date[2]/xsi:annee"/>
									</p>
								</div>
								<div class="right">
									<p class="description"><xsl:value-of disable-output-escaping="yes" select="xsi:description"/></p>
								</div>
								<div class="clear"/>
							</div>
						</xsl:for-each>
							
							
						<div class="title">
							<h1 class="title_h1" about="http://glecun.fr/#aboutMe"><i class="fa fa-wrench" ></i>
								<xsl:choose>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
										Conférences / Formations
									</xsl:when>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
										Events
									</xsl:when>
								</xsl:choose>
							</h1>
						</div>
						<xsl:for-each select="xsi:cv/xsi:evenements/xsi:evenement">
							<div class="content_double">
								<div class="left">
									<h3 class="title_content_double"><xsl:value-of select="xsi:nom"/></h3>
									<p class="lieu_annee">
										<xsl:value-of select="xsi:lieu"/><br/>
										<xsl:value-of select="xsi:date/xsi:mois"/><xsl:text> </xsl:text><xsl:value-of select="xsi:date/xsi:annee"/>
									</p>
								</div>
								<div class="right">
									<p class="description"><xsl:value-of select="xsi:description"/></p>
									<xsl:if test="xsi:url_event">
										<xsl:variable name= "url_event" select="xsi:url_event/text()"/>
										<p class="sources">
											<span>
												<xsl:choose>
													<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
														Lien:
													</xsl:when>
													<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
														Link:
													</xsl:when>
												</xsl:choose>
											</span>
											<xsl:text> </xsl:text><a href="{$url_event}"><xsl:value-of select="xsi:url_event"/></a>
										</p>
									</xsl:if>
								</div>
								<div class="clear"/>
							</div>
						</xsl:for-each>
						
						<div class="title">
							<h1 class="title_h1" about="http://glecun.fr/#aboutMe"><i class="fa fa-trophy" ></i>
									<xsl:choose>
										<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
											Formations
										</xsl:when>
										<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
											Education
										</xsl:when>
									</xsl:choose>
							</h1>
						</div>
						<xsl:for-each select="xsi:cv/xsi:formations/xsi:diplome">
							<div class="content_double" property="aiiso:teaches">
								<div class="left">
									<h3 class="title_content_double" property="dc:subject"><xsl:value-of select="xsi:nom"/></h3>
									<p class="lieu_annee" property="foaf:name">
										<xsl:value-of select="xsi:lieu_obtention"/><br/>
										<xsl:value-of select="xsi:annee"/>
									</p>
								</div>
								<div class="right">
									<p class="description"><xsl:value-of select="xsi:description"/></p>
								</div>
								<div class="clear"/>
							</div>
						</xsl:for-each>
						<div class="clear"/>
					</div>
					
					<div class="content_right">
						<div class="title">
							<h1 class="title_h1 competence-title" about="http://glecun.fr/#aboutMe"><i class="fa fa-suitcase" ></i>
								<xsl:choose>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
										Compétences
									</xsl:when>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
										Skills
									</xsl:when>
								</xsl:choose>
							</h1>
						</div>
						<div class="competences">
							<xsl:for-each select="xsi:cv/xsi:competences/xsi:groupe">
								<h2><xsl:value-of select="xsi:nom"/></h2>
								<div class="block_competences">
									<xsl:for-each select="xsi:competence">
										<xsl:choose>
											<xsl:when test="xsi:bold">
												<span class="nom_competence bold"><xsl:value-of select="xsi:nom"/></span>
											</xsl:when>
											<xsl:otherwise>
												<span class="nom_competence"><xsl:value-of select="xsi:nom"/></span>
											</xsl:otherwise>
										</xsl:choose>
										<xsl:if test="position() != last()">, </xsl:if>
									</xsl:for-each>
								</div>
							</xsl:for-each>
							<div class="clear"/>
						</div>

						<div class="title" style="margin-top:35px;">
							<h1 class="title_h1" about="http://glecun.fr/#aboutMe"><i class="fa fa-info-circle" ></i>
								<xsl:choose>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
										Autres
									</xsl:when>
									<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
										Others
									</xsl:when>
								</xsl:choose>
							</h1>
						</div>
						<div class="autres">
							<div class="autre">
								<span class="autre_title">
									<xsl:choose>
										<xsl:when test="/xsi:cv/xsi:lang/text() = 'FR'">
											Langues:
										</xsl:when>
										<xsl:when test="/xsi:cv/xsi:lang/text() = 'EN'">
											Languages:
										</xsl:when>
									</xsl:choose>
								</span>
								<div>
									<xsl:for-each select="xsi:cv/xsi:autres/xsi:langues/xsi:langue">
										<div class="language">
											<span>
												<xsl:value-of select="xsi:nom"/>
											</span>
											<xsl:choose>
												<xsl:when test="xsi:niveau !=''">
													<span>
														<xsl:text> </xsl:text><xsl:value-of select="xsi:niveau"/>
													</span>
												</xsl:when>
											</xsl:choose>
										</div>
									</xsl:for-each>
								</div>
							</div>
							
							<div class="autre" property="foaf:interest">
								<span class="autre_title">
									Hobbies:
								</span>
								<div class="hobbies">
									<xsl:for-each select="xsi:cv/xsi:autres/xsi:hobbies/xsi:hobbie">
										<div class="hobbie">
											<xsl:variable name="icon-name" select="xsi:icon/text()"/>
											<i class="fa fa-{$icon-name}"/><span>
											<xsl:value-of select="xsi:nom"/></span>
										</div>
									</xsl:for-each>
								</div>
							</div>
						</div>
						<div class="clear"/>
					</div>
					<div class="clear"/>
				</div>
				<div style="height:50px;"/>
				<script>
					yearOfXp = new Date().getFullYear() - 2012
					document.getElementById("years-of-experience").innerText = yearOfXp;
				</script>
			</body>
		</html>
		
	</xsl:template>

</xsl:stylesheet>
