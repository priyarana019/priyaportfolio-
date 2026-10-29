from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom colors matching design palette
    c_primary = colors.HexColor('#6B21A8')     # Deep Purple
    c_secondary = colors.HexColor('#1E1B4B')   # Deep Navy
    c_text_dark = colors.HexColor('#1E293B')   # Slate 800
    c_text_muted = colors.HexColor('#475569')  # Slate 600
    c_border = colors.HexColor('#CBD5E1')      # Border gray
    c_tag_bg = colors.HexColor('#F3E8FF')      # Light violet

    # Typography styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=c_secondary,
        alignment=0
    )

    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=c_primary,
        alignment=0
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=c_text_muted,
        alignment=0
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=c_secondary,
        spaceBefore=6,
        spaceAfter=2
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=c_text_dark
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11.5,
        textColor=c_text_muted
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_text_dark
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_text_dark,
        leftIndent=10
    )

    story = []

    # Header section
    header_data = [
        [
            Paragraph("<b>PRIYA</b>", name_style),
            Paragraph("<b>Location:</b> Rishikesh, Uttarakhand, India<br/><b>Email:</b> priya.cse.rishikesh@example.com", contact_style)
        ],
        [
            Paragraph("<b>First-Year B.Tech Computer Science & Engineering Student</b>", title_style),
            Paragraph("<b>LinkedIn:</b> linkedin.com/in/priya-cse<br/><b>GitHub:</b> github.com/priya-cse", contact_style)
        ]
    ]

    header_table = Table(header_data, colWidths=[330, 210])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=2, spaceAfter=6))

    # Profile Summary
    story.append(Paragraph("<b>CAREER OBJECTIVE</b>", section_heading))
    story.append(Paragraph(
        "Enthusiastic, disciplined first-year Computer Science Engineering undergraduate from Rishikesh, Uttarakhand, "
        "building solid core competencies in C programming, Python scripting, and semantic responsive web development (HTML5/CSS3). "
        "Eager to apply structured algorithmic thinking, academic coursework, and active IEEE student community engagement "
        "toward entry-level software projects and collaborative engineering opportunities.",
        body_style
    ))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_border, spaceBefore=3, spaceAfter=4))

    # Education
    story.append(Paragraph("<b>EDUCATION</b>", section_heading))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Technology (B.Tech) - Computer Science & Engineering</b>", item_title),
            Paragraph("<b>2024 – 2028</b>", ParagraphStyle('RightBold', parent=item_title, alignment=2))
        ],
        [
            Paragraph("<i>State Technical University / Institute affiliated, Uttarakhand, India</i>", item_sub),
            Paragraph("<i>Semester 1 SGPA: 8.9 / 10.0</i>", ParagraphStyle('RightSub', parent=item_sub, alignment=2))
        ],
        [
            Paragraph("• Coursework: Problem Solving & Programming in C, Calculus & Linear Algebra, Basic Electronics, Physics Laboratory.", bullet_style),
            Paragraph("", body_style)
        ],
        [
            Paragraph("<b>Higher Secondary Certificate (Class XII, CBSE - Science Stream)</b>", item_title),
            Paragraph("<b>Completed: 2024</b>", ParagraphStyle('RightBold2', parent=item_title, alignment=2))
        ],
        [
            Paragraph("<i>Senior Secondary School, Rishikesh, Uttarakhand | Percentage: 92.4%</i>", item_sub),
            Paragraph("", body_style)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[400, 140])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_border, spaceBefore=3, spaceAfter=4))

    # Technical Skills
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_heading))
    skills_data = [
        [
            Paragraph("<b>Programming Languages:</b>", item_title),
            Paragraph("C (Pointers, Structs, File I/O, Dynamic Memory Allocation), Python (Core Syntax, Data Structures, Automation)", body_style)
        ],
        [
            Paragraph("<b>Web Technologies:</b>", item_title),
            Paragraph("HTML5 (Semantic markup, Accessibility), CSS3 (Flexbox, CSS Grid, Responsive design, Modern Dark Themes)", body_style)
        ],
        [
            Paragraph("<b>Developer Tools & OS:</b>", item_title),
            Paragraph("Git, GitHub, VS Code, Linux/Bash Terminal Basics, GCC Compiler, Markdown", body_style)
        ],
        [
            Paragraph("<b>Core CS Concepts:</b>", item_title),
            Paragraph("Procedural Programming, Algorithmic Logic, Flowcharts, Number Systems, Data Flow Architecture", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[140, 400])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_border, spaceBefore=3, spaceAfter=4))

    # Projects
    story.append(Paragraph("<b>ACADEMIC & HACKATHON PROJECTS</b>", section_heading))

    # Project 1
    p1_data = [
        [
            Paragraph("<b>Student Record Management System</b> | <i>C Language, Binary File Handling, Algorithms</i>", item_title),
            Paragraph("<b>Coursework Project</b>", ParagraphStyle('ProjDate', parent=item_title, alignment=2))
        ]
    ]
    p1_table = Table(p1_data, colWidths=[420, 120])
    p1_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(p1_table)
    story.append(Paragraph("• Implemented structured records in C with persistent binary stream storage (<font name='Courier'>fread/fwrite</font>) to add, update, and search records.", bullet_style))
    story.append(Paragraph("• Built an O(log n) binary search lookup by student ID and automated semester GPA calculation with robust edge-case validation.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2
    p2_data = [
        [
            Paragraph("<b>Campus Companion Utility</b> | <i>Python, HTML5, CSS3, Responsive Design</i>", item_title),
            Paragraph("<b>Freshman Hackathon</b>", ParagraphStyle('ProjDate2', parent=item_title, alignment=2))
        ]
    ]
    p2_table = Table(p2_data, colWidths=[420, 120])
    p2_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(p2_table)
    story.append(Paragraph("• Developed a fast, mobile-friendly campus daily dashboard within a 24-hour sprint as a team of 3 (Lead Front-end Developer).", bullet_style))
    story.append(Paragraph("• Integrated offline-first schedules, mess menu lookups, and lecture notice boards; recognized as <b>Top 15 Finalist</b> among 75+ teams.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 3
    p3_data = [
        [
            Paragraph("<b>Personal Developer Portfolio</b> | <i>HTML5, CSS3, JavaScript, UI/UX</i>", item_title),
            Paragraph("<b>Independent Project</b>", ParagraphStyle('ProjDate3', parent=item_title, alignment=2))
        ]
    ]
    p3_table = Table(p3_data, colWidths=[420, 120])
    p3_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(p3_table)
    story.append(Paragraph("• Built a clean, accessible developer portfolio featuring modern navy/purple glassmorphism, responsive navigation, and project modal views.", bullet_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_border, spaceBefore=3, spaceAfter=4))

    # Achievements & Extracurriculars
    story.append(Paragraph("<b>ACHIEVEMENTS, WORKSHOPS & IEEE ACTIVITIES</b>", section_heading))
    achieve_points = [
        "<b>IEEE Student Member:</b> Active member of the College IEEE Student Branch; attended technical symposiums, coding challenges, and peer mentorship sessions.",
        "<b>Freshman Hackathon Finalist:</b> Achieved Top 15 Finalist standing out of 75+ teams for developing the 'Campus Companion' utility during freshman orientation.",
        "<b>Workshop - Hands-on Git & GitHub:</b> Mastered version control workflows, branching, PRs, and collaborative development in a 2-day hands-on bootcamp.",
        "<b>Workshop - Foundations of C Programming:</b> Participated in an intensive departmental workshop focusing on memory layout, pointer arithmetic, and standard libraries.",
        "<b>Certifications:</b> Programming Essentials in C (Course Completion); Python for Beginners (Online Learning Certification)."
    ]
    for pt in achieve_points:
        story.append(Paragraph("• " + pt, bullet_style))
        story.append(Spacer(1, 1.5))

    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_border, spaceBefore=3, spaceAfter=4))

    # Interests
    story.append(Paragraph("<b>INTERESTS & ACTIVITIES</b>", section_heading))
    story.append(Paragraph(
        "<b>Interests:</b> Coding & Problem Solving, Photography (Ganga riverbank landscapes and architectural geometry in Rishikesh), Open Source Learning, Tech Blogging.",
        body_style
    ))

    doc.build(story)
    print("Resume PDF generated successfully at:", output_path)

if __name__ == '__main__':
    generate_resume("assets/Priya_Resume.pdf")

