import './About.css';
import logo from '../images/222.jpg';
import logo2 from '../images/111.jpg';
import logo3 from '../images/55555.jpg';
import logo4 from '../images/666666.jpg';
import SEO from '../../components/SEO';

const About = () => (
  <>
    <SEO 
      title="عن المدرسة"
      description="تعرف على مركز الفرصة الثانية - مدرسة تعليمية خاصة في المغرب. اكتشف فريق العمل المتميز من المدير عبدالله اشح والمشرفة التربوية حليمة عاتق وأساتذة العلوم والنجارة."
      keywords="عن المدرسة, مركز الفرصة الثانية, فريق العمل, المدير عبدالله اشح, المشرفة التربوية حليمة عاتق, أستاذة العلوم لعتيق فتيحة, أستاذ النجارة عبدالرحمان اجواهر, مدرسة مغربية, تعليم خاص, الدار البيضاء"
      image="/images/222.jpg"
    />
    
    <div className="container p-6">
    <h1 className="text-center mb-5 text-primary">عن المدرسة</h1>
    <p className="lead text-center text-muted mb-5">
      مدرستنا هي مؤسسة تعليمية خاصة تقع في المغرب. نقدم برامج تعليمية حديثة ومناسبة لاحتياجات الطلاب، مع التركيز على الجودة والابتكار.
    </p>

    <h2 className="text-center mb-4 text-secondary">فريق العمل</h2>
    
    <div className="row text-center">
<div className="col-lg-4 col-md-6 mb-4">
  <div className="card shadow-sm border-0 rounded">
    <img src={logo} alt="المدير" className="card-img-top rounded-circle mx-auto d-block mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
    <div className="card-body">
      <div className="text-center">
      <h5 className="card-title">المدير</h5>
      </div>
      <h5 className="card-title">عبدالله اشح</h5>
      <p className="card-text">يشرف المدير على جميع الأنشطة الإدارية والأكاديمية لضمان توفير تعليم عالي الجودة. يقود الفريق المدرسي نحو النجاح المستدام</p>
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 mb-4">
  <div className="card shadow-sm border-0 rounded">
    <img src={logo3} alt="أستاذ 1" className="card-img-top rounded-circle mx-auto d-block mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
    <div className="card-body">
      <div className="text-center">
      <h5 className="card-title">المشرفة التربوية</h5>
      </div>
      <h5 className="card-title">حليمة عاتق</h5>
      <p className="card-text">تحرص على انضباط التلاميذ داخل المؤسسة، مما يساعد على توفير بيئة تعليمية منظمة. لديها شغف كبير بالحفاظ على النظام وضمان سير المؤسسة بشكل أفضل</p>
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 mb-4">
  <div className="card shadow-sm border-0 rounded">
    <img src={logo4} alt="أستاذ 2" className="card-img-top rounded-circle mx-auto d-block mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
    <div className="card-body">
      <div className="text-center">
      <h5 className="card-title">أستاذة العلوم</h5>
      </div>
      <h5 className="card-title">لعتيق فتيحة</h5>
      <p className="card-text">تُدرس أستاذة العلوم المفاهيم الأساسية وتساعد الطلاب في التميز في المواد العلمية. لديها شغف كبير بتبسيط العلوم وجعلها ممتعة</p>
    </div>
  </div>
</div>



<div className="col-lg-4 col-md-6 mb-4">
  <div className="card shadow-sm border-0 rounded">
    <img src={logo2} alt="أستاذ 1" className="card-img-top rounded-circle mx-auto d-block mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
    <div className="card-body">
      <div className="text-center">
      <h5 className="card-title">أستاذ ورشة نجارة</h5>
      </div>
      <h5 className="card-title">عبدالرحمان اجواهر
      </h5>
      <p className="card-text">يُدرس أستاذ ورشة النجارة المهارات الأساسية في النجارة ويعلم الطلاب كيفية التعامل مع الأدوات والأخشاب. لديه شغف كبير بإنتاج مشاريع يدوية وإبداعية وتحفيز الطلاب على تطوير مهاراتهم العملية</p>
    </div>
  </div>
</div>


    </div>
  </div>
    </>
  );

export default About;
