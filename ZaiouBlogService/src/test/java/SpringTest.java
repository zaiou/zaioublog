import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * @Description: 单元测试
 * @Author: liubin
 * @Date: Created in 14:34 2018/3/1
 * @Modified by:
 */
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(value = {
//        "classpath:applicationContext.xml",
//        "classpath:mybatis-config.xml",
//        "classpath:spring-mvc.xml"
//})
public class SpringTest {
    private ApplicationContext ctx;

    @Before
    public void before() {
        ctx = new FileSystemXmlApplicationContext("classpath:applicationContext.xml");
    }
    @Test
    public void test(){
        System.out.println("单元测试");
//        System.out.println(testService.find(1));
    }
}
